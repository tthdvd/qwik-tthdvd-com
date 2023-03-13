import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class={"page-container"}>
      <article id="236ccf0e-09fb-45cf-a274-66561ffbebd8" class="page sans">
        <header>
          <h1 class="page-title">Hi, my name is David Toth! 👋🏻</h1>
        </header>
        <div class="page-body">
          <p id="0f62cf87-5792-47d5-9457-06601bcade77" class="">
          </p>
          <p id="264c447e-dea7-47a7-ac52-3f1fc5acc09b" class="">Nice to meet you! </p><p id="addd0082-f017-4043-ac66-1d924bce728d" class="">
          </p><p id="cf7914af-9360-40bb-84a0-0a46cbb29956" class="">You might want to check out my <a href="https://medium.com/@tthdvd">blog</a> 📝,</p><p id="7b0891c3-e423-4d17-a9d8-fe16d1eb2e30" class="">or you are just looking for my <a href="https://gastro.tthdvd.com">recipes</a>  (sorry, only in 🇭🇺 - yet),</p><p id="fad7a00b-7df3-4028-b501-821f3a88171e" class="">but you can find me on these platform as well:</p><p id="5e531a52-4b7f-45e3-bddf-5290d4155ee6" class=""><mark class="highlight-blue_background"><a href="https://mastodon.social/@tthdvd">Mastodon</a></mark> • <a href="https://github.com/tthdvd"><mark class="highlight-teal_background">GitHub</mark></a> • <a href="https://www.linkedin.com/in/tthdvd"><mark class="highlight-pink_background">LinkedIn</mark></a></p><p id="b872f8b5-1b4e-4c7f-9b4e-5b513e093c0b" class="">
          </p><p id="36013114-f3fb-46eb-9193-632759cb9e80" class="">If you would like to support my work, you can <a href="https://www.buymeacoffee.com/tthdvd">buy me a coffee</a> anytime! Thanks ❤️</p><p id="88661f1b-5190-4a36-bc82-67a17a018ef8" class="">
          </p></div></article>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'David Toth',
  meta: [
    {
      name: 'description',
      content: 'Hi, my name is David Toth! 👋🏻',
    },
  ],
};
