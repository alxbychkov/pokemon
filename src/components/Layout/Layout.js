import style from './style.module.css';

function Layout({id, title, children, urlBg, colorBg}) {
    const sectionStyle = {};
    
    if (urlBg) {
        sectionStyle.backgroundImage = `url(${urlBg})`;
    }

    if (colorBg) {
        sectionStyle.backgroundColor = colorBg;
    }

    return (
        <section className={style.root} style={sectionStyle} id={id}>
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        <h3>{title}</h3>
                        <span className={style.separator}></span>
                    </div>
                    <div className={`${style.desc} ${style.full}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;