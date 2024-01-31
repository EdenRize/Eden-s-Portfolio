import { Carousel } from "./Carousel";

export function Tools() {
    const toolsImgs = [
        '/img/react.svg',
        '/img/vue.svg',
        '/img/node.svg',
        '/img/tailwind.svg',
        '/img/css.svg',
        '/img/js.svg',
        '/img/mongo.svg',
        '/img/express.svg',
        '/img/babel.svg',
        '/img/postman.svg',
        '/img/quasar.svg',
        '/img/redux.svg',
        '/img/sass.svg',
        '/img/sql.svg',
        '/img/typescript.svg',
        '/img/figma.svg',
    ]

    return (
        <div className="tools">
            <h1 className="font-Gilmer-Outline">Languages, Frameworks & Tools</h1>
            <Carousel imgs={toolsImgs} />
        </div>
    )
}
