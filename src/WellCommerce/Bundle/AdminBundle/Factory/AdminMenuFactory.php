<?php
/*
 * WellCommerce Open-Source E-Commerce Platform
 * 
 * This file is part of the WellCommerce package.
 *
 * (c) Adam Piotrowski <adam@wellcommerce.org>
 * 
 * For the full copyright and license information,
 * please view the LICENSE file that was distributed with this source code.
 */

namespace WellCommerce\Bundle\AdminBundle\Factory;

use Doctrine\Common\Collections\ArrayCollection;
use WellCommerce\Bundle\AdminBundle\Entity\AdminMenu;
use WellCommerce\Bundle\CoreBundle\Factory\AbstractFactory;

/**
 * Class AdminMenuFactory
 *
 * @author  Adam Piotrowski <adam@wellcommerce.org>
 */
class AdminMenuFactory extends AbstractFactory
{
    /**
     * @return \WellCommerce\Bundle\AdminBundle\Entity\AdminMenuInterface
     */
    public function create()
    {
        $adminMenu = new AdminMenu();
        $adminMenu->setParent(null);
        $adminMenu->setCssClass('');
        $adminMenu->setChildren(new ArrayCollection());

        return $adminMenu;
    }
}