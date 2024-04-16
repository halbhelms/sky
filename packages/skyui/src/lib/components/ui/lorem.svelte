<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region: TS -->
<script lang="ts">
  export let length: string = '7'
  const lorem = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit culpa sequi architecto necessitatibus et voluptatem consequatur, tenetur nisi pariatur, aliquam iste ab eligendi eius consectetur nostrum quis dicta illum. Quia placeat non impedit eos incidunt temporibus minima sint id? Veniam aut molestiae fugiat inventore sapiente accusantium aliquam maiores eligendi, non voluptatum, veritatis delectus voluptas ipsam neque hic eaque cum quis. Amet iste necessitatibus sapiente eveniet ullam porro inventore obcaecati dolore maiores. Adipisci aliquam explicabo fugit temporibus obcaecati ipsam dignissimos accusantium iusto harum quaerat maxime, possimus facere repellat nobis qui quam facilis voluptate. Quibusdam, asperiores aspernatur ab qui consectetur maxime fuga. Nostrum obcaecati rem eum est minima molestiae sed ullam pariatur quos incidunt debitis architecto praesentium, totam a corrupti itaque quo perspiciatis voluptas eligendi, fugiat dolores. Fugiat eius perferendis dolores magni sint nesciunt sed possimus repellendus labore porro non vitae, minima ipsum et ratione molestiae, perspiciatis est ad sequi ipsa assumenda laboriosam tempora aspernatur sunt. Nisi, possimus perspiciatis. Cum, amet obcaecati placeat recusandae corporis mollitia optio possimus doloremque voluptas odit, qui quo. Dignissimos incidunt at accusantium consequuntur modi iste! Perferendis autem numquam minima.'

  function display() {
    // Split the string into an array of words
    const words = lorem.split(' ');
    const start = Math.floor(Math.random() * (words.length/2));
    
    // Select the words from the starting index, up to the specified length
    const selectedWords = words.slice(start,start + parseInt(length));
    // Join the selected words back into a string
    return selectedWords.join(' ');
  }
</script>
<!-- #endregion -->


<!-- #region: HTML -->
<div>
  {display()}
</div>
<!-- #endregion -->


<!-- #region: CSS -->
<style>
  div::first-letter {
    text-transform: uppercase;
  }
</style>
<!-- #endregion -->