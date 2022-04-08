(() => {
  let smallImage = document.querySelector('#smallPhoto'),
      largeImage = document.querySelector('#largePhoto'),
      memberInfo = document.querySelector('#info'),
      h3 = document.getElementsByTagName('h3')[0],
      titleMember = document.querySelector('.title');


  const teamInfo = [
    //Trieu's bio
    'Hello my name is Aaron Do. Graduate student from Fanshawe, IDP3. Believe as a active designer always urging to learn and gain experience from futhers front end skills, enjoy all creative work, brainstorm and build up ideas. I also love enjoying many outdoor event such as EDM festival and music concert which give me good experience as ever. My favorite hobby also watching movies and playing online games with friends on my free time. '
    //Linh's bio
  , 'Hello my name is Linh Nguyen. .'];
  function memberLoad() {
    //debugger;
    largeImage.classList.add('switchAnimation');
    smallImage.classList.add('switchAnimationSmall');
    h3.classList.add('switchAnimation');
    memberInfo.classList.add('switchAnimation');
    memberInfo.innerHTML = teamInfo[0];
  }
  function bioInfo() {
    //debugger;
    smallImage.classList.remove('switchAnimationSmall');
    largeImage.classList.remove('switchAnimation');
    h3.classList.remove('switchAnimation');
    memberInfo.classList.remove('switchAnimation');


    smallImage.classList.add('switchAnimationSmall');
    largeImage.classList.add('switchAnimation');
    h3.classList.add('switchAnimation');
    memberInfo.classList.add('switchAnimation');

    if (memberInfo.innerHTML == teamInfo[0]) {
      largeImage.src = 'images/Member1_large.jpg';
      smallImage.src = 'images/Member2_small.jpg';
      memberInfo.innerHTML = teamInfo[1];
      h3.innerHTML = "Linh Nguyen";
    }
    else {
      largeImage.src = 'images/Member2_large.jpg';
      smallImage.src = 'images/Member1_smal.jpg';

      memberInfo.innerHTML = teamInfo[0];
      h3.innerHTML = "Trieu Do";
    }
  }


  window.addEventListener('load', memberLoad);
  titleMember.addEventListener('click', bioInfo);

})();
