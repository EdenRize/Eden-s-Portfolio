import { Carousel } from "./Carousel";

export function Tools() {
    const toolsImgs = [
        '../public/img/react.svg',
        '../public/img/vue.svg',
        '../public/img/node.svg',
        '../public/img/tailwind.svg',
        '../public/img/css.svg',
        '../public/img/js.svg',
        '../public/img/mongo.svg',
        '../public/img/express.svg',
        '../public/img/babel.svg',
        '../public/img/postman.svg',
        '../public/img/quasar.svg',
        '../public/img/redux.svg',
        '../public/img/sass.svg',
        '../public/img/sql.svg',
        '../public/img/typescript.svg',
        '../public/img/figma.svg',
    ]

    return (
        <div className="tools">
            <h1 className="font-Gilmer-Outline">Languages, Frameworks & Tools</h1>
            <Carousel imgs={toolsImgs} />
        </div>
    )
}
