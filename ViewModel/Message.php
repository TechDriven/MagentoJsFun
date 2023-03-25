<?php
namespace  Techdriven\MagentoJsFun\ViewModel;

use Magento\Framework\View\Element\Block\ArgumentInterface;

class Message implements ArgumentInterface
{
    public function getMessage()
    {
        return "Message from view model";
    }
}
