import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const textTest = document.createElement('div');
textTest.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis ex quis iaculis placerat. Nunc quis libero tellus. Sed efficitur, mi id mattis porttitor, erat elit consequat lacus, quis ullamcorper arcu urna finibus enim. Nam efficitur non nisl vitae porta. Curabitur viverra nunc ac efficitur tincidunt. Fusce elit mi, imperdiet eget tortor in, convallis ullamcorper nisl. Duis pharetra enim eget ex ultrices placerat.
<br/><br/>
Maecenas faucibus, leo eget consequat suscipit, diam metus tristique tellus, pharetra pellentesque tellus dolor in urna. Morbi quis gravida ante. Nulla facilisi. Etiam in faucibus lectus. Maecenas id tincidunt diam. Integer pretium nibh nisl, quis fermentum libero imperdiet vestibulum. Etiam suscipit, purus in tristique consectetur, metus nisi laoreet lorem, eget dictum urna purus in nibh. Nulla vel gravida nulla, nec egestas leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque sed dignissim mi. Ut a enim varius lorem semper condimentum vitae a velit.
<br/><br/>
Mauris quis sem odio. Aliquam varius finibus mollis. Integer vitae sollicitudin diam, eu porta lorem. Vivamus ut vestibulum metus. In eu urna eu orci posuere vulputate. Donec at malesuada leo, nec semper urna. Quisque euismod lorem a aliquet feugiat. Quisque ullamcorper quis lectus in mollis. Nunc nec feugiat mi. Etiam bibendum feugiat ligula. Nulla id vestibulum dolor. Curabitur suscipit dui nisl, non tincidunt nulla consectetur id. Etiam eget massa at metus commodo ultrices. Aliquam eu ex posuere, facilisis arcu a, faucibus lorem. Fusce tempus a arcu sed consequat. Nulla pretium gravida nulla eu sagittis.
<br/><br/>
Nam egestas, magna quis sodales porta, odio neque facilisis dolor, ut ullamcorper lacus tortor vel felis. Vestibulum vitae mi gravida, maximus quam eu, auctor purus. Nulla felis neque, convallis eu pharetra vitae, bibendum quis justo. Donec elementum sollicitudin leo non egestas. Aenean ac fringilla ex. Etiam quis libero nunc. Morbi tincidunt maximus ligula ut hendrerit. Vestibulum tellus felis, ultricies a magna vel, fringilla ultricies nunc. Phasellus hendrerit metus ac magna eleifend, in interdum risus rutrum. Duis malesuada accumsan est quis pulvinar. Phasellus velit ante, porta eu malesuada mollis, viverra at nulla. Ut vitae volutpat quam. Nullam eu lectus a arcu cursus interdum. Vivamus ac sapien auctor, pretium purus eget, venenatis diam.
<br/><br/>
Phasellus sapien turpis, ultrices non pharetra quis, varius vel nibh. Duis ut ipsum elementum, condimentum enim eu, semper mauris. Nunc sodales, velit id accumsan posuere, nisl lacus lacinia lectus, in tempor ipsum enim ac ipsum. In vel mi velit. Praesent at vestibulum lorem, sed sagittis risus. Donec cursus nec magna vel malesuada. Donec euismod ligula nec aliquet pharetra. Fusce tincidunt sodales neque non vulputate.`;

const body = document.querySelector('body');
body.append(textTest);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

const calculatePercentageScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
  return (scrollTop / (scrollHeight - clientHeight) * 100);
};

const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$
  .pipe(
    // map(event => calculatePercentageScroll(event))
    map(calculatePercentageScroll),
    tap(console.log)
  );

progress$.subscribe(percentage => {
  progressBar.style.width = `${percentage}%`
});
