import React, { useEffect, useRef, useState } from "react";
import * as joint from "jointjs";
import styled from "styled-components";
import mosaicImg from "../images/mosaic.png";
const V = joint.V;

const PageContainer = styled.div`
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 125px;
  width: 80%;
`;

const ContentContainer = styled.div`
  background-color: #f1e7d3;
  max-width: 1300px;
  margin: 0 auto;
  padding: 50px;
  width: 85%;
`;

const Header = styled.h1`
  text-align: center;
  color: #826324;
  font-size: 2rem;
  font-family: "Joan", serif;
`;

const SubHeader = styled.h2`
  text-align: center;
  color: #826324;
  font-size: 1.2rem;
  font-family: "Joan", serif;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 10;
  overflow: visible;
  justify-content: center;
`;

const MosaicContainer = styled.div`
  width: 125%;
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  overflow: visible;
`;

export default function Mosaic() {
  const paperRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (paperRef.current?.parentElement) {
        setContainerWidth(paperRef.current.parentElement.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!paperRef.current || !containerWidth) return;

    const JigsawPiece = joint.dia.Element.define(
      "jigsaw.Piece",
      {
        attrs: {
          polygon: {
            tabs: [0, 0, 0, 0],
            image: ["", 0, 0],
            stroke: "none",
            strokeWidth: 0,
          },
        },
      },
      {
        markup: [{ tagName: "polygon", selector: "polygon" }],
      },
      {
        attributes: {
          tabs: {
            set: function (_, refBBox) {
              const origin = refBBox.origin();
              const topRight = refBBox.topRight();
              const bottomRight = refBBox.corner();
              const bottomLeft = refBBox.bottomLeft();
              const points = [origin, topRight, bottomRight, bottomLeft];
              return {
                points: points.map((p) => `${p.x},${p.y}`).join(" "),
              };
            },
            unset: "points",
          },
          image: {
            set: function (image) {
              if (!Array.isArray(image)) return;
              const paper = this.paper;
              const model = this.model;
              const width = model.prop("size/width");
              const height = model.prop("size/height");
              const id = `image-pattern-${width}-${height}-${image.join("-")}`;
              if (!paper.isDefined(id)) {
                const tabSize = model.get("tabSize");
                V(
                  "pattern",
                  {
                    id,
                    x: -tabSize,
                    y: -tabSize,
                    width: width + 2 * tabSize,
                    height: height + 2 * tabSize,
                    patternUnits: "userSpaceOnUse",
                  },
                  [
                    V("use", {
                      "xlink:href": `#${image[0]}`,
                      x: -(image[1] * width + tabSize),
                      y: -(image[2] * height + tabSize),
                    }),
                  ]
                ).appendTo(paper.defs);
              }
              return {
                fill: `url(#${id})`,
              };
            },
            unset: "fill",
          },
        },
      }
    );

    const GRID = 10;
    const PADDING = 20;
    const TAB_RATIO = 0.15;
    const IMAGE_ID = "puzzle-image";
    const ROWS = 3;
    const COLS = 5;

    const snappedWidth =
      Math.floor((containerWidth - 2 * PADDING) / (COLS * GRID)) * COLS * GRID;
    const pieceSize = snappedWidth / COLS;
    const width = pieceSize * COLS;
    const height = pieceSize * ROWS;

    const graph = new joint.dia.Graph({}, { cellNamespace: joint.shapes });

    const paper = new joint.dia.Paper({
      el: paperRef.current,
      model: graph,
      width: width + 2 * PADDING,
      height: height + 2 * PADDING,
      gridSize: GRID,
      async: true,
      clickThreshold: 5,
      background: { color: "transparent" },
      cellViewNamespace: joint.shapes,
      z: 10,
      overflow: "visible",
    });

    paper.on("cell:pointerdown", (pieceView) => {
      pieceView.model.toFront();
      pieceView.model.set("z", 11);
      pieceView.highlight("polygon");
    });
    paper.on("cell:pointerup", (pieceView) => {
      pieceView.unhighlight("polygon");
    });

    V("image", {
      id: IMAGE_ID,
      preserveAspectRatio: "xMidYMid meet",
      "xlink:href": mosaicImg,
      x: 2 * TAB_RATIO * pieceSize,
      y: 2 * TAB_RATIO * pieceSize,
      width,
      height,
    }).appendTo(paper.defs);

    function generatePuzzle() {
      graph.clear();
      const pieces = [];
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const piece = new JigsawPiece({
            position: {
              x: PADDING + c * pieceSize,
              y: PADDING + r * pieceSize,
            },
            size: {
              width: pieceSize,
              height: pieceSize,
            },
            z: 10,
            tabSize: TAB_RATIO * pieceSize,
            attrs: {
              polygon: {
                tabs: [0, 0, 0, 0],
                image: [IMAGE_ID, c, r],
                stroke: "none",
                strokeWidth: 0,
              },
            },
          });
          piece.addTo(graph);
          pieces.push(piece);
        }
      }
      return pieces;
    }

    function shufflePuzzle(pieces) {
      for (let piece of pieces) {
        const randomX = PADDING + Math.random() * width - pieceSize / 2;
        const randomY = PADDING + Math.random() * height - pieceSize / 2;
        const snapped = joint.g.Point(randomX, randomY).snapToGrid(GRID);
        piece.transition("position", snapped.toJSON(), {
          delay: 0,
          duration: 1000,
          valueFunction: joint.util.interpolate.object,
        });
        piece.transition("angle", 0, {
          delay: 0,
          duration: 1000,
        });
      }
    }

    const pieces = generatePuzzle();
    shufflePuzzle(pieces);
  }, [containerWidth]);

  return (
    <PageContainer>
      <ContentContainer>
        <Header>Then vs. Now: Changes from 2021-2022 to 2024-2025</Header>
        <SubHeader>Drag and drop the pieces to complete the puzzle!</SubHeader>
        <Container>
          <MosaicContainer>
            <div ref={paperRef} id="paper" style={{ margin: "0 auto" }} />
          </MosaicContainer>
        </Container>
      </ContentContainer>
    </PageContainer>
  );
}
