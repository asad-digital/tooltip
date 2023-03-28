<script>
  $(document).ready(function() {
    $('.ad-tooltip').each(function(){
      var tooltipText = $(this).attr('ad-tooltip');
      $(this).addClass('ad-tooltip-trigger');
      $(this).append('<div class=ad-tooltip-content>'+tooltipText+'<div class="ad-tooltip-icon"><svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6L0 0L12 9.08524e-07L6 6Z" fill="#305DFF"/></svg></div></div>');
    });
    $('.ad-tooltip').on('mouseenter', function() {
      $(this).find('.ad-tooltip-content').addClass('ad-tooltip-active');
    });
    $('.ad-tooltip').on('mouseleave', function() {
      $(this).find('.ad-tooltip-content').removeClass('ad-tooltip-active');
    });
  });
</script>
