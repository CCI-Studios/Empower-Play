<?php
/**
 * @file
 * theme's implementation to display a block with the main menu.
 */     
?>
<div id="main-navigation">
  <div class="block block-system" id="block-system-main-menu">
    <div class="block-inner">
      <div class="content ">
        <?php print $content; ?>
         <div class="social-icons">
    <?php $block = module_invoke('block','block_view','2');
    print render($block['content']);
    ?> 
</div>
      </div>
     
    </div>

  </div>

</div>

<!-- or a div added here would be ok -->
