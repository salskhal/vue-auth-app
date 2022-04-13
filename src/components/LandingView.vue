<template>
    <div class="landing-view">
        <h3>Providing you with the best cyber security solution</h3>
        <p class="landing-view_description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis libero delectus dicta quia? Doloribus, quibusdam totam vel corrupti natus nihil.</p>
        <Btn link="/register" theme="register" msg="Get Started"/>
        <p class="trial"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg> Unlimited free trial without credit card</p>
    </div>
</template>

<script>
import Btn from "./Btn.vue"
export default {
  components:{
    Btn
  }
}
</script>


<style >
    .landing-view{
        flex-grow: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .landing-view h3{
        font-size: 48px;
        width: 800px;
        text-align: center;
        font-weight: bold;
    }

    .landing-view_description{
        font-size: 19px;
        color: var(--text-light);
        width: 640px;
        letter-spacing: 2px;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    svg{
        color: #0070f3;
    }

    .trial{
        margin-top: 30px;
    }
</style>


