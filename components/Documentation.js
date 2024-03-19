import { useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
const Documentation = ({ name, email, uuid }) => {

    // useEffect(() => {
    //     fetch(`aaa`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }, []);

    // const api = `https://ramadan-calender-by-tajbir.onrender.com/account/district?uid=${uid}&district=Your district name`
    const apiDocs = `
        const uid = ${uuid}
        fetch('https://ramadan-calender-by-tajbir.onrender.com/account/district?uid=${uuid}&district=Your district name')
        .then(res => res.json())
        .then(data => console.log(data))
    `
  return (
    <div>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {apiDocs}
      </SyntaxHighlighter>
    </div>
  );
};

export default Documentation;
