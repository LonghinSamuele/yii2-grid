<?php

/**
 * @package yii2-grid
 * @version 1.4.3
 */

namespace  samuelelonghin\grid\assets;

use yii\web\AssetBundle;

class GridViewAsset extends AssetBundle
{
    public $sourcePath= __DIR__ ;
    public $css= [
        'css/css-grid',
    ];
    public $js=[
        'js/js-grid',
    ];

}