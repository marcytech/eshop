export default ({ ctx, css }) => css`
    ${ctx},
    ${ctx} .wrapper {
        display:flex;
        flex-wrap:wrap;
        justify-content: center;
        align-items: center;
        width:100%;
        background:#fff;
    } 

    ${ctx} .wrapper{
        height:50vh;
    }

    ${ctx} .form {
        width:100%;
        max-width:250px;
    }

    ${ctx} .btn {
        display:flex;
        justify-content: center;
        align-items:center; 
        padding:15px;
        border-radius: 5px;
        border:0;
        font-size: .875em;
        text-transform:uppercase;
        width:100%;
        margin-bottom:15px;
        box-shadow: 3px 3px 3px #ccc
    } 
    ${ctx} .btn-email {} 
    ${ctx} .btn-facebook {} 
    ${ctx} .btn-google {} 
`