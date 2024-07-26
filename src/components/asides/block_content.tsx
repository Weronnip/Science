import "./blockStyle/block.css"

export function BlockContent() {

    return(
        <>
            <section className="list-news">
                <BlockInfo1 />
                <BlockInfo2 />
                <BlockInfo2 />
                <BlockInfo2 />
            </section>
        </>
    );
}

function BlockInfo1() {
    return (
        <>
            <div className="block-content">
                <span className="tag">Очень большой тег</span>
                <span className="tag">Тег</span>
                <span className="tag">Очень большой тег</span>
                <span className="tag">Тег</span>
                <span className="tag">Очень большой тег</span>
                <span className="tag">Тег</span>
                <span className="tag">Очень большой тег</span>
                <span className="tag">Тег</span>

                <p className="title-aside">Международная научно-практическая конференция: 
                                “Переход от образовательной среды к 
                                образовательной экосистеме в интересах устойчивого развития””</p>
                <div className="block-postion-bth">
                    <button className="button-write">Написать</button>
                    <button className="button-about">Подробнее →</button>
                </div>
            </div>
        </>
    );
}

function BlockInfo2() {
    return (
        <>
            <div className="block-content">
                <span className="tag">Образование</span>
                <span className="tag">Очное</span>
                <span className="tag">Студенты</span>

                <p className="title-aside">Международная научно-практическая конференция: 
                                “Переход от образовательной среды к 
                                образовательной экосистеме в интересах устойчивого развития””</p>
                <div className="block-postion-bth">
                    <button className="button-write">Написать</button>
                    <button className="button-about">Подробнее →</button>
                </div>
            </div>
        </>
    );
}