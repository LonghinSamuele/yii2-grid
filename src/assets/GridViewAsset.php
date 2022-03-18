<?php

/**
 * @package yii2-grid
 * @version 1.4.3
 */

namespace  samuelelonghin\grid\assets;

use yii\web\AssetBundle;

class GridViewAsset extends AssetBundle
{
    /**
     * @inheritdoc
     */
    public function init()
    {
        $this->depends = array_merge(["kartik\\grid\\GridViewAsset", "yii\\grid\\GridViewAsset"], $this->depends);
        $this->setSourcePath(__DIR__ . '/assets');
        $this->setupAssets('js', ['js/sl-grid']);
        $this->setupAssets('css', ['js/css-grid']);
        parent::init();
    }
}