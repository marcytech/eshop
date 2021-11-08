export default ({ ctx, css }) => css`
    ${ctx},
    ${ctx} .wrapper {
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        align-items:center;
        width:100%;
    }

    ${ctx} .form {
        display: flex;
        justify-content: space-around;
        align-items:center;
        width:100%;
        padding:15px;

    }
    ${ctx} label {
        display: flex;
        justify-content:center;
        align-items:center;
        width:100%;
 
    }
    ${ctx} input {
        display: flex;
        justify-content:center;
        align-items:center;
        width:100%;
        padding:15px;
        border-radius:3px;
        border:0;
        outline:0;
        color: #666;
        background:#ebebeb;
        font-size: 1.2rem;
 
    }
    ${ctx} button {
        display:flex;
        justify-content:center;
        margin-left:15px;
        padding:14px;
        border-radius:3px;
        border:0;
        background:#ebebeb;
    }
    ${ctx} i {
        color:#666;
    }

`