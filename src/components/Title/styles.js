import styled from 'styled-components'

export const TitleStyle = styled.h1`
    font-size: 3    0px;
    color:#fff;
animation:flipTitle 2s;

@keyframes flipTitle {
    from{
        transform: rotatex(90deg)
    }
    to{
        transform: rotatex(0deg)
    }
}
` 