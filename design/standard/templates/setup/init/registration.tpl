{* DO NOT EDIT THIS FILE! Use an override template instead. *}

<div align="center">
  <h1>{"Opensource software is nothing without a vibrant community!"|i18n("design/standard/setup/init")}</h1>
</div>

{'<p>If you need to share knowledge, exchange tips with developers or simply find some improvement tricks, the eZ Community is the place to go.</p>
<p>How do you access it?</p>
<ul>
  <li>Go on %share_link%share.ez.no%a%</li>
  <li>Click on Register (top of the page) and create your profile</li>
  <li>Here you can check out the %blogs_link%blog posts%a%, %events_link%events%a%, %partners_link%partners%a%...</li>
</ul></p>
<p>We’re looking forward to seeing what you share with the Community!</p>'|i18n('design/standard/setup/init',
    null,
    hash(
        '%a%', '</a>',
        '%share_link%', '<a href="http://share.ez.no/?utm_source=Setup%20Wizard&utm_medium=Setup%20Wizard&utm_campaign=Setup%20Wizard">',
        '%blogs_link%', '<a href="http://share.ez.no/blogs/?utm_source=Setup%20Wizard&utm_medium=Setup%20Wizard&utm_campaign=Setup%20Wizard">',
        '%events_link%', '<a href="http://share.ez.no/events/?utm_source=Setup%20Wizard&utm_medium=Setup%20Wizard&utm_campaign=Setup%20Wizard">',
        '%partners_link%', '<a href="http://share.ez.no/members-partners/find-a-partner/?utm_source=Setup%20Wizard&utm_medium=Setup%20Wizard&utm_campaign=Setup%20Wizard">'
    )
)}

<form method="post" action="{$script}">
    <div class="buttonblock" align="right">
        {include uri='design:setup/init/navigation.tpl'}
    </div>
    {include uri='design:setup/persistence.tpl'}
</form>
