<form method="post" action="/content/action/">

<table width="100%" cellspacing="1" cellpadding="4" bgcolor="#000000">
<tr>
    <th bgcolor="#FF9900" width="70%" valign="top">
    <span class="small">
    {attribute_view_gui attribute=$node.object.data_map.topic}
    </span>
    </th>
    <td bgcolor="#FF9900" align="rigtht" width="30%" valign="top">
    <span class="small">{$node.object.published|l10n(shortdatetime)}</span>
    </td>
</tr>
<tr>
    <td bgcolor="#FFFFFF" colspan="2">
    <span class="small">
    {attribute_view_gui attribute=$node.object.data_map.message}
    </span>
    </td>
</tr>
</table>
<br />

{section name=Child loop=fetch('content','list',hash(parent_node_id,$node.node_id,limit,$page_limit,offset,$view_parameters.offset))  sequence=array(FDF4D9,FDF1CE)}
<table width="100%" cellspacing="1" cellpadding="4" bgcolor="#000000">
<tr>
    <th bgcolor="#{$Child:sequence}"  width="70%" valign="top">
    <span class="small">
    {attribute_view_gui attribute=$Child:item.object.data_map.topic}
    </span>
    </th>
    <td bgcolor="#{$Child:sequence}" align="rigtht" width="30%" valign="top">
    <span class="small">{$Child:item.object.published|l10n(shortdatetime)} by
    by {$Child:item.object.owner.name}</span>
    </td>
</tr>
<tr>
    <td bgcolor="#{$Child:sequence}" colspan="2">
    <span class="small">
    {attribute_view_gui attribute=$Child:item.object.data_map.message}
    </span>
    </td>
</tr>
</table>
<br />
{/section}

<br />
<input type="hidden" name="NodeID" value="{$node.node_id}" />
<input class="button" type="submit" name="NewButton" value="{"New reply"|i18n}" />
<input type="hidden" name="ClassID" value="8" />

<input type="hidden" name="ContentObjectID" value="{$node.object.id}" />

</form>
