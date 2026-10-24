---
title: SSG-Compare-Hugo
description: "TWMP Assignment #6: SSG Comparison"
params:
  body_class: td-navbar-links-all-active
---

{{% blocks/cover
  title="Welcome to SSG-Compare-Hugo: Part of a compare and contrast of SSGs: GitBook, Docusaurus, and Hugo!"
  height="full td-below-navbar"
  image_anchor="top"
  color="primary bg-gradient td-below-navbar"
%}}

<!--
  Want a cover without an image?
  Add the following argument to the blocks/cover shortcode:
    color="primary bg-gradient td-below-navbar"
-->

<!-- prettier-ignore -->
{{% _param description %}}
{.display-6}

<!-- prettier-ignore -->
<div class="td-cta-buttons my-5">
  <a {{% _param btn-lg primary %}} href="docs/">
    Start Here
  </a>
  <a {{% _param btn-lg secondary %}}
    href="{{% param github_repo %}}"
    target="_blank" rel="noopener noreferrer">
    Get the code
    {{% _param FA brands github "" %}}
  </a>
</div>

{{% blocks/link-down color="info" %}}

{{% /blocks/cover %}}

{{% blocks/lead color="white" %}}

SSG-Compare-Hugo is a website build by [Ethan Sattersten](https://ethansattersten.com) to learn how different SSGs work.

{{% /blocks/lead %}}

