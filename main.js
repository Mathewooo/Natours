import './style.css'

document.querySelector('#app').innerHTML = `
    <header class="header">
        <div class="logo-box">
            <img src="./public/img/logo-white.png"  alt="logo" class="logo"/>
        </div>
        <div class="text-box">
            <h1 class="heading-primary">
                <span class="heading-primary-main">
                    Outdoors
                </span>
                <span class="heading-primary-sub">
                    is where life happens
                </span>
            </h1>
            <a href="#" class="btn btn-white btn-animated">Discover our tours</a>
        </div>
    </header>
`