
export const headerHtml = () => {
    const header = document.querySelector('header')

    const headerContent = `
    <h1 class="grid-item-3">Doc.</h1>
    <!-- <nav class="grid-item-9 grid">
        <ul class="grid">
          <li>
            <div>Js<i class="fa-solid fa-chevron-down"></i><hr/></div>
            <ul class="active">
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </li>
          <li>test<hr/></li>
          <li>test<hr/></li>
        </ul>
      </nav> -->
    `
    header.innerHTML += headerContent
}
