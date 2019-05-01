import * as $ from "jquery";
import * as THREE from "three";
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Object3D, Mesh } from "three";
import Controller from "./Controller";

// ts type global declare 
declare global {
  interface ICallback {
    ( error: Error, result?: number ) : void;
  }
  
  interface windowEx extends Window{ 
    $: any; 
    jquery:any;
    THREE:any;
  }
  interface Object3dEx extends Object3D{
    $controller:Controller;
  }

  interface MeshEx extends Mesh{
    $controller:Controller;
  }
  
  type meshOrObject3d = MeshEx | Object3dEx;
}

(<windowEx>window).$ = (<windowEx>window).jquery = $;
(<windowEx>window).THREE = THREE;