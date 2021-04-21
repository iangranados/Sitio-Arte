<template>
  <q-page class="Home">
    <section class="Home__main">
      <h1 class="Home__title">lele dibujitos</h1>
      <q-img alt="Quasar logo" src="~assets/quasar-logo-full.svg" width="35%" />
      <div class="SocialLinks">
        <q-btn
          flat
          round
          class="SocialLinks__item"
          color="gray"
          icon="fab fa-instagram"
          type="a"
          href="https://www.instagram.com"
          target="_blank"
        />
        <q-btn
          flat
          round
          class="SocialLinks__item"
          color="gray"
          icon="fab fa-facebook"
          type="a"
          href="https://www.facebook.com"
          target="_blank"
        />
        <q-btn
          flat
          round
          class="SocialLinks__item"
          color="gray"
          icon="fab fa-twitter"
          type="a"
          href="https://www.twitter.com"
          target="_blank"
        />
      </div>
    </section>
    <q-separator color="light-gray" />
    <section class="Home__section">
      <h2 class="SectionTitle">Reglas</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus vel
        nisi at feugiat. Nulla facilisi. Nulla congue gravida magna ac blandit.
        Vestibulum sed felis at dolor vulputate fringilla ut ut turpis. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam turpis.
      </p>
      <ul>
        <li>Cras sit amet ante tincidunt</li>
        <li>lacinia urna sed, egestas velit.</li>
      </ul>
      <p>
        Suspendisse pulvinar lectus risus, posuere scelerisque dui facilisis
        vitae. Praesent luctus vestibulum nisi in viverra. Integer non viverra
        urna. Cras at nibh elit. Vestibulum dapibus, justo at varius accumsan,
        felis urna sodales mi, eget tempus arcu ex et felis. Fusce in elit
        dapibus, ultricies felis non, vestibulum urna. Sed ut massa at turpis
        iaculis molestie.
      </p>
    </section>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
};
</script>

<style lang="scss">
// $
.Home {
  @include content-width;
}

.Home__main {
  padding: 50px 30px;
  text-align: center;
}

.Home__section {
  padding: 50px 20px;
}

.Home__title {
  @include font(38px, bold, $red-lips);
  letter-spacing: 3px;
  margin: 0 0 20px;
  @media (min-width: $breakpoint-md-min) {
    font-size: 50px;
  }
}

.SocialLinks {
  margin-top: 20px;
  .SocialLinks__item {
    color: $gray;
    font-size: 10px;
    margin: 0 8px;
  }
}
</style>
