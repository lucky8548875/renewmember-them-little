<template lang="pug">
  .blank.padding-large
    h1 404
    h2 Page {{$route.path}} not found
    br
    a(@click='$router.go(-1)')
      fa.margin-right(icon="arrow-left")
      span Back to Previous Page
</template>