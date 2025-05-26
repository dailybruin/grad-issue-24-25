import ArticleCard from './ArticleCard.js'
import styled from 'styled-components'
import backgroundImage from '../images/background-bricks.png'


const GridContainer = styled.div`
	height: auto;
	color: #F0E8CE;
    text-align: center;
    padding-top: 20%;
    position: relative;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 
`; 

const Articles = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    & > div {
        position: relative;
    }

    & > div:nth-child(even) {
        margin-top: 29em;
    }

    & > div:nth-child(odd) {
        left: 2em;
        margin-top: 2em;
    }
`;

const DesktopArticleGrid = ({ articles }) => {
    return (
        <GridContainer>
            <Articles>
            {articles.map((article) => {
                return <ArticleCard props={article} />;
             })}
            </Articles>
        </GridContainer>
    )
  }

export default DesktopArticleGrid;