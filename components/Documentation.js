import 'prismjs/themes/prism.css';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import { useEffect } from 'react';

const Documentation = ({ name, email, uuid }) => {

    const apiDocs = `
        const uid = ${uuid}
        fetch('https://ramadan-calender-by-tajbir.onrender.com/account/district?uid=${uuid}&district= Your district name')
        .then(res => res.json())
        .then(data => console.log(data))
    `;

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div>
            <pre>
                <code className="language-javascript">
                    {apiDocs}
                </code>
            </pre>
        </div>
    );
};

export default Documentation;
