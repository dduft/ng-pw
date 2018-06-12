# Ng-PW

Angular 5-Boilerplate for dynamic-content-pages feed by genius [ProcessWire CMS](https://processwire.com/)

This project works well together with [PwJsonPageProfile](https://github.com/dduft/PwJsonPageProfile).

If you haven't heard anything about pages, templates and fields(the simple but genius concept behind processwire) or processwire at all, please consider reading this tutorial before going any further: <br/>[But what if I don't know how to code? - Chapter 1 - Pages, Templates, Files and Fields](https://processwire.com/docs/tutorials/but-what-if-i-dont-know-how-to-code/part-1-pages-templates-fields-files/)

You are still here or already back from the tut, great! Then let's start...

## The concept
Pages are based on Templates and Templates contain/provide fields. If you have internalized this, than you know a lot about processwire. But how can we match this with the component concept of angular? And where does the routes come from? Well, first of all we ask the API to give us the structure of the pages to build the routes dynamically. In the app-routing module, we have to match the pw-template components with the template names from our first request.

### Templates
Every processwire-template has to have a matching counterpart in pw-templates. For presentation purpose normally you can get along with the default template named `basic-page`.
My basic-page template in pw e.g. contains the fields:
* title (Fieldtype: PageTitle)
* content_elements (Fieldtype: RepeaterMatrix)
* link_placement (Fieldtype: Options)

Title should be clear, and link_placement is an additional attribute to place the link for the page in header or footer. And now the content_element.
As you can see i used the [RepeaterMatrix](https://processwire.com/api/modules/profields/repeater-matrix/) from the ProFields of pw.
> Repeater Matrix is an extension of Repeaters that enables you to have repeater items of different types in the same repeater. You define what fields accompany each item type. You can have any number of items of any type that you define. Repeater Matrix fields are very similar to regular ProcessWire repeater fields, except that in regular repeater fields, you can only have one type. Repeater Matrix fields enable flexible content types and open the door to all kinds of great content management possibilities

You can easily define as many subcomponents/fields as you need in one content-element, put that in one template and get along the entire site. Without the RepeaterMatrix you would need several templates to achieve same result. I strongly recommend using them.

Anyways if you need forms in pages it can be handy to put them in separate templates to split up action logic in angular-components.

### Fields
If the user requests the page, the field-structure will be loaded. For every field a component has to be defined in pw-fields. So in template-component it is possible to iterate through structure.

If you have to provide any forms my solution was to group all the fields in a single repeater-field. This was the only possibility to date grouping fields in pw.
I prefixed all the fields with `formfield_` and the repeater-field with `form_` prefix. So I can easily identify my form-element in template and the fields in dynamic-form mechanism.

### Pages
And what are pages in ng-pw? There aren't any. Pages will be rendered via templates they are based on.

So that's it. The rest should be clear by studying demo.

## Installation
coming soon...
