export default ({ ctx, css }) => css`
    ${ctx},
    ${ctx} .wrapper {
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        align-items:center;
        width:100%;
    }

    ${ctx} .wrapper {
        height:50vh;
        background:#ededed
    }


    ${ctx}  h1 {
        display:flex;
        flex-wrap:wrap;
        justify-content:flex-start;
        align-items:flex-start;
        font-size: 2.3em;
        font-weight: bolder;
    }
    ${ctx}  span {
        font-size: .5em;
        font-weight: normal;
        width:100%
    }
`