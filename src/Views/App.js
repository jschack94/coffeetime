import React from 'react';
import {
    Container,
    InnerLanding,
    Heading,
    Spacing,
    FixedSpacing,
    Loader
} from '../Styling';
import NavBar from '../Components/NavBar';
import RecipeList from '../Components/RecipeList';

function App() {
    return (
        <Container>
            <Loader />
            <NavBar />
            <InnerLanding>
                <Spacing>
                    <Heading>
                        Built to make brewing the perfect cup of coffee easy.
                    </Heading>
                </Spacing>
                <Spacing>
                    <RecipeList />
                </Spacing>
            </InnerLanding>
            <FixedSpacing>
            </FixedSpacing>
        </Container>
    );
}

export default App;