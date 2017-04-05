/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function refreshOrderList(TItem)
{
    // ...
}

function showContact(item, args)
{
    var container = $('#contact-card');
    if (typeof args != 'undefined' && typeof args.container !='undefined')
        container = args.container;
    setItemInHTML(container, item);
}

function showOrder(item)
{
    setItemInHTML($('#order-card'), item);
}

function showBill(item)
{
    setItemInHTML($('#bill-card'), item);
}

function refreshAssociateOrderList($container, TOrder)
{
    var x = 0;
    $container.empty();
    for (var i in TOrder)
    {
        var $li = $('<li><a data-toggle="tab" href="#order-card" onclick="javascript:showItem(\'order\', ' + TOrder[i].id + ', showOrder)">' + TOrder[i].ref + '</a></li>');
        $container.append($li);

        if (x > 10)
            return;
        else
            x++;
    }
}

function refreshAssociateBillList($container, TBill)
{
    var x = 0;
    $container.empty();
    for (var i in TBill)
    {
        var $li = $('<li><a data-toggle="tab" href="#bill-card" onclick="javascript:showItem(\'bill\', ' + TBill[i].id + ', showBill)">' + TBill[i].ref + '</a></li>');
        $container.append($li);

        if (x > 10)
            return;
        else
            x++;
    }
}

function refreshAssociateContactList($container, TContact)
{
    var x = 0;
    $container.empty();
    console.log('TContact', TContact);
    for (var i in TContact)
    {
        var $li = $('<li><a data-toggle="tab" href="#contact-card" onclick="javascript:showItem(\'thirdparty\', ' + TContact[i].id + ', showContact)">' + TContact[i].firstname + '     ' + TContact[i].lastname + '</a></li>');
        console.log("id",TContact[i].id);
        $container.append($li);

        if (x > 10)
            return;
        else
            x++;
    }
}
