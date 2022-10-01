
$('.location button').click(function(){
    for(var i=0;i<3;i++){
      $('.slide .map').html('<iframe class="p-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-73.69948615489405!3d40.69767006338158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z2YbZitmI2YrZiNix2YPYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2sil!4v1664439100547!5m2!1sar!2sil" width="450" height="430" style="border:0;" class="text-center" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
      $('.slide').slideDown(1000);
      $('.slide').css('position','fixed');
    }
  })

  $('.slide .close').click(function(){
    $('.slide').slideUp(1000);
  })
