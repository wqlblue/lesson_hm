// 1.js

// 从 2.js 导入 preOrder 函数
import { preOrder } from './2.js';

// 定义树结构
const root = {
    val: 'A',
    left: {
        val: 'B',
        left: {
            val: 'D'
        },
        right: {
            val: 'E'
        }
    },
    right: {
        val: 'C',
        right: {
            val: 'F'
        }
    }
};

// 调用先序遍历函数
console.log('Pre-order traversal:');
preOrder(root);