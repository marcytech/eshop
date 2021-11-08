export default ({ ctx, css }) => css`
    ${ctx},
    ${ctx} .wrapper {
        display:flex;
        flex-wrap:wrap;
        justify-content: flex-start;
        align-items: flex-start;
        width:100%;
        background:#fff;
    } 

    ${ctx} .box {
        display:flex;
        flex-wrap:wrap;
        justify-content: flex-start;
        align-items: flex-start;
        width:100%;
        border:1px red solid;

    }

    ${ctx} .search-area {
    }
    ${ctx} .slider-area {
        height:300px;
    }
    ${ctx} .sections-area {
        height:230px;
    }
    ${ctx} .navigation-area {
        height:30px;
    }
    ${ctx} {}
    ${ctx} {}
    ${ctx} {}
    ${ctx} {}
    ${ctx} {}

`