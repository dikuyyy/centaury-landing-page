import * as React from "react"
const SvgComponent = (props:any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={100}
        height={100}
        viewBox="0 0 50 50"
        {...props}
    >
        <path d="M9 4C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5H9zm6 4h2.4l1.6 4 1.6-4H23l-3 7v4h-2v-4.01c-.6-1.61-2.59-5.98-3-6.99zm10 3c.89 0 1.77.27 2.33.95.43.49.67 1.28.67 2.32v1.46c0 1.04-.2 1.76-.62 2.25-.56.67-1.49 1.02-2.38 1.02-.89 0-1.8-.35-2.36-1.02-.43-.49-.64-1.21-.64-2.25v-1.45c0-1.04.23-1.84.67-2.33.56-.68 1.32-.95 2.33-.95zm4 0h2v6c.05.27.34.39.61.39.41 0 .93-.48 1.39-1.01V11h2v8h-2v-1.38c-.81.79-1.5 1.38-2.41 1.35-.66-.02-1.12-.26-1.35-.74-.14-.28-.24-.73-.24-1.39V11zm-4 1.62a1.007 1.007 0 0 0-.922.625 1.03 1.03 0 0 0-.078.396v2.808a1.028 1.028 0 0 0 .611.94.976.976 0 0 0 .778 0c.358-.156.611-.52.611-.94v-2.808c0-.56-.45-1.022-1-1.022zM24.99 22h.02s6.71 0 11.19.32c.63.07 1.99.08 3.21 1.33.96.94 1.27 3.1 1.27 3.1s.32 1.53.32 4.06v2.37c0 2.53-.32 4.06-.32 4.06s-.31 2.16-1.27 3.1c-1.22 1.25-2.58 1.26-3.21 1.33-4.48.32-11.2.33-11.2.33s-8.32-.08-10.88-.32c-.71-.13-2.31-.09-3.53-1.33-.96-.95-1.27-3.11-1.27-3.11S9 35.71 9 33.18v-2.37c0-2.53.32-4.06.32-4.06s.31-2.16 1.27-3.1c1.22-1.25 2.58-1.26 3.21-1.33C18.28 22 24.99 22 24.99 22zM12 26v1.979h2V38h2V27.979h2V26h-6zm13 0v12h2v-1.25c.631.781 1.453 1.25 2.125 1.25.752 0 1.408-.405 1.66-1.18.12-.419.207-.81.215-1.695v-2.75c0-.988-.134-1.732-.26-2.152-.252-.781-.862-1.218-1.615-1.223-.98-.007-1.375.5-2.125 1.375V26h-2zm-7 3v6.686c0 .722.1 1.206.23 1.523.22.514.67.791 1.31.791.73 0 1.67-.514 2.46-1.365V38h2v-9h-2v6.27c-.44.584-1.08 1.02-1.48 1.02-.26 0-.47-.11-.52-.397V29h-2zm17.03 0c-1.009 0-1.796.317-2.366.916-.42.442-.664 1.165-.664 2.102v3.066c0 .931.269 1.583.688 2.02.57.599 1.356.896 2.388.896 1.031 0 1.843-.313 2.389-.95.24-.28.394-.596.46-.948.019-.16.075-.591.075-1.102h-2v.799c0 .464-.448.84-1 .84s-1-.377-1-.84V34h4v-2.021c0-.935-.23-1.62-.643-2.063-.553-.599-1.338-.916-2.328-.916zM35 30.447c.552 0 1 .377 1 .84v1.328h-2v-1.328c0-.464.448-.84 1-.84zm-6.78.3c.546 0 .78.334.78 1.378v2.75c0 1.044-.234 1.404-.78 1.404-.31 0-.904-.213-1.22-.529v-4.375c.316-.312.91-.629 1.22-.629z" />
    </svg>
)
export default SvgComponent
