import React, { useEffect, useRef } from "react";
import * as joint from "jointjs";
import mosaicImg from "../images/mosaic.png";

const V = joint.V;

export default function Mosaic() {
  const paperRef = useRef(null);

  useEffect(() => {
    if (!paperRef.current) return;

    // ✅ Define your custom shape
    const JigsawPiece = joint.dia.Element.define(
      "jigsaw.Piece",
      {
        attrs: {
          polygon: {
            tabs: [0, 0, 0, 0],
            image: ["", 0, 0],
            stroke: "#ddd",
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
                points: points.map((p) => p.x + "," + p.y).join(" "),
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
              const id =
                "image-pattern-" +
                width +
                "-" +
                height +
                "-" +
                image.join("-");
              if (!paper.isDefined(id)) {
                const tabSize = model.get("tabSize");
                V(
                  "pattern",
                  {
                    id: id,
                    x: -tabSize,
                    y: -tabSize,
                    width: width + 2 * tabSize,
                    height: height + 2 * tabSize,
                    patternUnits: "userSpaceOnUse",
                  },
                  [
                    V("use", {
                      "xlink:href": "#" + image[0],
                      x: -(image[1] * width + tabSize),
                      y: -(image[2] * height + tabSize),
                    }),
                  ]
                ).appendTo(paper.defs);
              }
              return {
                fill: "url(#" + id + ")",
              };
            },
            unset: "fill",
          },
        },
      }
    );

    const GRID = 10;
    const PADDING = 75;
    const TAB_RATIO = 0.15;
    const IMAGE_ID = "puzzle-image";
    const rows = 3;
    const columns = 3;
    const pieceSize = 90;
    const width = columns * pieceSize;
    const height = rows * pieceSize;

    const graph = new joint.dia.Graph({}, { cellNamespace: joint.shapes });
    const paper = new joint.dia.Paper({
      el: paperRef.current,
      model: graph,
      gridSize: GRID,
      cellViewNamespace: joint.shapes,
      async: true,
    });

    V("image", {
      id: IMAGE_ID,
      preserveAspectRatio: "xMidYMid meet",
      "xlink:href": mosaicImg,
      x: 2 * TAB_RATIO * pieceSize,
      y: 2 * TAB_RATIO * pieceSize,
      width: width,
      height: height,
    }).appendTo(paper.defs);

    function generatePuzzle() {
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
          const tabs = [0, 0, 0, 0];
          const piece = new JigsawPiece({
            position: {
              x: PADDING + c * pieceSize,
              y: PADDING + r * pieceSize,
            },
            size: {
              width: pieceSize,
              height: pieceSize,
            },
            tabSize: TAB_RATIO * pieceSize,
            attrs: {
              polygon: {
                tabs: tabs,
                image: [IMAGE_ID, c, r],
              },
            },
          });
          piece.addTo(graph);
        }
      }
    }

    generatePuzzle();
  }, []);

  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <div ref={paperRef} id="paper" />
    </div>
  );
}
