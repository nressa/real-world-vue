<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <nuxt-link to="/" class="navbar-brand">
        Real World Events
    </nuxt-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
            <nuxt-link to="/event" class="nav-link">
                List
            </nuxt-link> 
            <nuxt-link to="/event/create" class="nav-link">
                Create
            </nuxt-link> 
            <nuxt-link to="/about" class="nav-link">
                About
            </nuxt-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>