import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {

  const birthday = new Date('1994-09-20')
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  return (
    <div class={"page-container"}>
      <article id="236ccf0e-09fb-45cf-a274-66561ffbebd8" class="page sans">
        <header>
          <h1 class="page-title ">Hi, my name is <span class="tooltip">David Toth<span class="tooltiptext">a {age}-year-old product engineer</span></span>! 👋🏻</h1>
        </header>
        <div class="page-body">
          <p>
            Nice to meet you!
          </p>
          <p>
            <br></br>
          </p>
          <p>
            You might want to check out my <a href="https://medium.com/@tthdvd">blog</a> 📝,
          </p>
          <p>
            or you are just looking for my <a href="https://gastro.tthdvd.com">recipes</a>  (sorry, only in 🇭🇺 - yet),
          </p>
          <p>
            but you can find me on these platform as well:
          </p>
          <p>
            <mark class="highlight-blue_background"><a href="https://mastodon.social/@tthdvd">Mastodon</a></mark> • <a href="https://github.com/tthdvd"><mark class="highlight-teal_background">GitHub</mark></a> • <a href="https://www.linkedin.com/in/tthdvd"><mark class="highlight-pink_background">LinkedIn</mark></a>
          </p>
          <p>
            <br></br>
          </p>
          <p>
            If you would like to support my work, you can <a href="https://www.buymeacoffee.com/tthdvd">buy me a coffee</a> anytime! Thanks ❤️
          </p>

        </div>
      </article>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'David Toth - Product engineer',
  meta: [
    {
      name: 'description',
      content: 'Hi, my name is David Toth! 👋🏻',
    },
  ],
};
