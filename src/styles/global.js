import { injectGlobal } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

injectGlobal`
*{
    margin: 0;
    padding: 0;
    box-sizing: borde-box;
    outline: 0;
}
body{
    background: #9B65E5;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
}
`;
