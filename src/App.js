import "./App.css";
import styled from "styled-components";
import Container from "./components/Container/Container";
import RecipesList from "./components/RecipesList/RecipesList";
import RecipeItem from "./components/RecipeItem/RecipeItem";
import recipes from "./db/recipes.json";
// import alarm from "./imgs/alarm-clock.svg";
// import serving from "./imgs/serving-dish.png";
// import callories from "./imgs/calories.svg";

const RecipeImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 20px;
`;

const RecipeTitle = styled.h2`
  font-size: 13px;
  font-style: bold;
  margin-top: 10px;
`;

const RecipeInfoList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  gap: 5px;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 5px;
`;

const RecipeInfoText = styled.p`
  font-size: 12px;
`;

const RecipeDifficultyBox = styled.ul`
  padding: 5px 50px;
  gap: 5px;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 5px;
`;

const RecipeDifficultyTitle = styled.h2`
  font-size: 12px;
`;

const RecipeDifficultyText = styled.p`
  padding: 5px;
  gap: 5px;
  background-color: rgb(252, 139, 139);
  border-radius: 20px;
  margin-top: 5px;
  text-align: center;
`;

// const RecipeInfoItem = styled.li``;

function App() {
  return (
    <Container>
      <RecipesList>
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.id}>
            <RecipeImg src={recipe.url} />
            <RecipeTitle>{recipe.name}</RecipeTitle>
            <RecipeInfoList>
              <li>
                <RecipeInfoText>{recipe.time} min</RecipeInfoText>
              </li>
              <li>
                <RecipeInfoText>{recipe.servings} servingd</RecipeInfoText>
              </li>
              <li>
                <RecipeInfoText>{recipe.callories} callories</RecipeInfoText>
              </li>
            </RecipeInfoList>
            <RecipeDifficultyBox>
              <RecipeDifficultyTitle>Difficulty</RecipeDifficultyTitle>
              <RecipeDifficultyText>{recipe.difficalty}</RecipeDifficultyText>
            </RecipeDifficultyBox>
          </RecipeItem>
        ))}
      </RecipesList>
    </Container>
  );
}

export default App;
