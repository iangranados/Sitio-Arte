<template>
  <q-page class="Comisiones">
    <div class="Comisiones__section">
      <div class="Comisiones__actions">
        <q-btn
          class="Comisiones__btn"
          to="/comisiones/board"
          label="See active commissions"
          outline
          color="primary"
        />
        <q-btn
          class="Comisiones__btn"
          to="/comisiones/ordenar"
          label="Order a commission"
          unelevated
          color="primary"
        />
      </div>
      <p class="Comisiones__disclaimer">
        *Please be sure to check the rules in the home page before requesting a
        commission.
      </p>
    </div>
    <q-separator color="light-gray" />
    <div class="Comisiones__section">
      <div class="Comisiones__Category row q-col-gutter-lg">
        <div class="Category__description col-xs-12 col-md-7">
          <h2 class="SectionTitle">Full Body</h2>
          <ul>
            <li>Price: 65 USD (+45 USD per extra character)</li>
          </ul>
        </div>
        <div class="Category__placeholder col-xs-12 col-md-5">
          <q-img src="~assets/images/placeholder_thumb.png" alt="placeholder" />
        </div>
      </div>
    </div>
    <q-separator color="light-gray" />
    <div class="Comisiones__section">
      <div class="Comisiones__Category row q-col-gutter-lg">
        <div class="Category__description col-xs-12 col-md-7">
          <h2 class="SectionTitle">Half Body</h2>
          <ul>
            <li>Price: 45 USD (+30 USD per extra character)</li>
          </ul>
        </div>
        <div class="Category__placeholder col-xs-12 col-md-5">
          <q-img src="~assets/images/placeholder_thumb.png" alt="placeholder" />
        </div>
      </div>
    </div>
    <q-separator color="light-gray" />
    <div class="Comisiones__section">
      <div class="Comisiones__Category row q-col-gutter-lg">
        <div class="Category__description col-xs-12 col-md-7">
          <h2 class="SectionTitle">Bust</h2>
          <ul>
            <li>Price: 35 USD (+30 USD per extra character)</li>
          </ul>
        </div>
        <div class="Category__placeholder col-xs-12 col-md-5">
          <q-img src="~assets/images/placeholder_thumb.png" alt="placeholder" />
        </div>
      </div>
    </div>
    <q-separator color="light-gray" />
    <div class="Comisiones__section">
      <div class="Comisiones__Category row q-col-gutter-lg">
        <div class="Category__description col-xs-12 col-md-7">
          <h2 class="SectionTitle">Chibi</h2>
          <ul>
            <li>Price: 30 USD (+25 per extra character)</li>
          </ul>
        </div>
        <div class="Category__placeholder col-xs-12 col-md-5">
          <q-img src="~assets/images/placeholder_thumb.png" alt="placeholder" />
        </div>
      </div>
    </div>
    <q-separator color="light-gray" />
    <div class="Comisiones__section">
      <div class="Comisiones__Category row q-col-gutter-lg">
        <div class="Category__description col-xs-12 col-md-7">
          <h2 class="SectionTitle">Twitch Emotes / FB Stickers</h2>
          <ul>
            <li>Price: 25 USD per each</li>
            <li>Includes png, psd, jpg</li>
          </ul>
        </div>
        <div class="Category__placeholder col-xs-12 col-md-5">
          <q-img src="~assets/images/placeholder_thumb.png" alt="placeholder" />
        </div>
      </div>
    </div>
    <q-separator color="light-gray" />
    <div class="Comisiones__section">
      <div class="Comisiones__Category row q-col-gutter-lg">
        <div class="Category__description col-xs-12 col-md-7">
          <h2 class="SectionTitle">Twitch Badges</h2>
          <ul>
            <li>Price: 20 USD per each, if completely different (+5 if the others are recolors, +10 if the others are slightly diffent) </li>
          </ul>
        </div>
        <div class="Category__placeholder col-xs-12 col-md-5">
          <q-img src="~assets/images/placeholder_thumb.png" alt="placeholder" />
        </div>
      </div>
    </div>
    <q-separator color="light-gray" />
    <div class="Comisiones__section">
      <div class="Comisiones__Category row q-col-gutter-lg">
        <div class="Category__description col-xs-12 col-md-7">
          <h2 class="SectionTitle">Character Design</h2>
          <ul>
            <li>Initial Price: 70 USD (The price can increase if the character has complex or detailed outfits)</li>
          </ul>
        </div>
        <div class="Category__placeholder col-xs-12 col-md-5">
          <q-img src="~assets/images/placeholder_thumb.png" alt="placeholder" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "ComisionesMain",
};
</script>

<style lang="scss">
// $
.Comisiones {
  @include content-width;
}

.Comisiones__section {
  padding: 50px 20px;
}

.Comisiones__actions {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.Comisiones__btn {
  border-radius: 15px;
  letter-spacing: 1px;
  width: 100%;
  margin-bottom: 15px;
  font-weight: 20px;
  @media (min-width: $breakpoint-md-min) {
    width: 47%;
  }
}

.Comisiones__disclaimer {
  text-align: right;
  font-size: 12px;
}

.Category__description {
  .SectionTitle {
    font-size: 20px;
    margin-bottom: 10px;
    @media (min-width: $breakpoint-md-min) {
      font-size: 24px;
    }
  }
  p,
  ul > li {
    @media (min-width: $breakpoint-md-min) {
      font-size: 16px;
    }
  }
}

.Category__placeholder {
  display: flex;
  align-items: center;
}
</style>
