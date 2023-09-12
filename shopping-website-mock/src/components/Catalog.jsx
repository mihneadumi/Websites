import { Card } from "./Card"
import { Title } from "./Title"
import { StyledCatalog } from "./styles/Catalog.styled"
import { Container } from "./styles/Container.styled"
import { useSelector } from 'react-redux'

export const Catalog = () => {

    const catalog = useSelector(state => state.catalog.items)

    return (
        <StyledCatalog>
            <Title title="Catalog" />
            <Container>
                {catalog.map((item) => {
                    return(
                        <Card key={item.title + item.id} item={item} />
                    )
                })}
            </Container>
        </StyledCatalog>
    )
}
