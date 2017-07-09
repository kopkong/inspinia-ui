/**
 * Created by colin on 2017/7/7.
 */

import '../../../styles/_layouts.scss';

import React, {Component} from 'react';
import TitleBar from '../../../components/title-bar';
import {Panel} from '../../../../src/ui';

export default class UIPanelsContainer extends Component {

  render() {
    const menuNames = ['UI Elements', 'Panels'];
    return (
      <div>
        <TitleBar menuNameList={menuNames}/>

        <div className="normal-content-page">
          <Panel title="默认状态的Panel"
                 hasFooter footerText="左边来行小字" footerRightText="右边来行小字"
          >
            <h1 className="mb10">展示组件</h1>
            <p>它们只是普通的 React 组件，所以不会详细解释。我们会使用函数式无状态组件除非需要本地 state 或生命周期函数的场景。这并不是说展示组件必须是函数 -- 只是因为这样做容易些。如果你需要使用本地
              state，生命周期方法，或者性能优化，可以将它们转成 class。
            </p>
          </Panel>

          <Panel title="默认关闭着的Panel" className="mt20" defaultCollapsed>
            <h1 className="mb10">容器组件</h1>
            <p>现在来创建一些容器组件把这些展示组件和 Redux 关联起来。技术上讲，容器组件就是使用 store.subscribe() 从 Redux state 树中读取部分数据，并通过 props
              来把这些数据提供给要渲染的组件。你可以手工来开发容器组件，但建议使用 React Redux 库的 connect() 方法来生成，这个方法做了性能优化来避免很多不必要的重复渲染。（这样你就不必为了性能而手动实现
              React 性能优化建议 中的 shouldComponentUpdate 方法。）

              使用 connect() 前，需要先定义 mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中。例如，VisibleTodoList
              需要计算传到 TodoList 中的 todos，所以定义了根据 state.visibilityFilter 来过滤 state.todos 的方法，并在 mapStateToProps 中使用。</p>
          </Panel>

          <Panel title="可以全屏的Panel" className="mt20" hideConfigButton hasFullSizeButton>
            <h1 className="mb10">容器组件</h1>
            <p>现在来创建一些容器组件把这些展示组件和 Redux 关联起来。技术上讲，容器组件就是使用 store.subscribe() 从 Redux state 树中读取部分数据，并通过 props
              来把这些数据提供给要渲染的组件。你可以手工来开发容器组件，但建议使用 React Redux 库的 connect() 方法来生成，这个方法做了性能优化来避免很多不必要的重复渲染。（这样你就不必为了性能而手动实现
              React 性能优化建议 中的 shouldComponentUpdate 方法。）

              使用 connect() 前，需要先定义 mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中。例如，VisibleTodoList
              需要计算传到 TodoList 中的 todos，所以定义了根据 state.visibilityFilter 来过滤 state.todos 的方法，并在 mapStateToProps 中使用。</p>
          </Panel>

          <Panel title="固定高度可以滚动的Panel" className="mt20" hideConfigButton contentHeight={300}>
            <h1 className="mb10">容器组件</h1>
            <p>现在来创建一些容器组件把这些展示组件和 Redux 关联起来。技术上讲，容器组件就是使用 store.subscribe() 从 Redux state 树中读取部分数据，并通过 props
              来把这些数据提供给要渲染的组件。你可以手工来开发容器组件，但建议使用 React Redux 库的 connect() 方法来生成，这个方法做了性能优化来避免很多不必要的重复渲染。（这样你就不必为了性能而手动实现
              React 性能优化建议 中的 shouldComponentUpdate 方法。）

              使用 connect() 前，需要先定义 mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中。例如，VisibleTodoList
              需要计算传到 TodoList 中的 todos，所以定义了根据 state.visibilityFilter 来过滤 state.todos 的方法，并在 mapStateToProps 中使用。
              现在来创建一些容器组件把这些展示组件和 Redux 关联起来。技术上讲，容器组件就是使用 store.subscribe() 从 Redux state 树中读取部分数据，并通过 props
              来把这些数据提供给要渲染的组件。你可以手工来开发容器组件，但建议使用 React Redux 库的 connect() 方法来生成，这个方法做了性能优化来避免很多不必要的重复渲染。（这样你就不必为了性能而手动实现
              React 性能优化建议 中的 shouldComponentUpdate 方法。）

              使用 connect() 前，需要先定义 mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中。例如，VisibleTodoList
              需要计算传到 TodoList 中的 todos，所以定义了根据 state.visibilityFilter 来过滤 state.todos 的方法，并在 mapStateToProps 中使用。
              现在来创建一些容器组件把这些展示组件和 Redux 关联起来。技术上讲，容器组件就是使用 store.subscribe() 从 Redux state 树中读取部分数据，并通过 props
              来把这些数据提供给要渲染的组件。你可以手工来开发容器组件，但建议使用 React Redux 库的 connect() 方法来生成，这个方法做了性能优化来避免很多不必要的重复渲染。（这样你就不必为了性能而手动实现
              React 性能优化建议 中的 shouldComponentUpdate 方法。）

              使用 connect() 前，需要先定义 mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中。例如，VisibleTodoList
              需要计算传到 TodoList 中的 todos，所以定义了根据 state.visibilityFilter 来过滤 state.todos 的方法，并在 mapStateToProps 中使用。
              现在来创建一些容器组件把这些展示组件和 Redux 关联起来。技术上讲，容器组件就是使用 store.subscribe() 从 Redux state 树中读取部分数据，并通过 props
              来把这些数据提供给要渲染的组件。你可以手工来开发容器组件，但建议使用 React Redux 库的 connect() 方法来生成，这个方法做了性能优化来避免很多不必要的重复渲染。（这样你就不必为了性能而手动实现
              React 性能优化建议 中的 shouldComponentUpdate 方法。）

              使用 connect() 前，需要先定义 mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中。例如，VisibleTodoList
              需要计算传到 TodoList 中的 todos，所以定义了根据 state.visibilityFilter 来过滤 state.todos 的方法，并在 mapStateToProps 中使用。
              现在来创建一些容器组件把这些展示组件和 Redux 关联起来。技术上讲，容器组件就是使用 store.subscribe() 从 Redux state 树中读取部分数据，并通过 props
              来把这些数据提供给要渲染的组件。你可以手工来开发容器组件，但建议使用 React Redux 库的 connect() 方法来生成，这个方法做了性能优化来避免很多不必要的重复渲染。（这样你就不必为了性能而手动实现
              React 性能优化建议 中的 shouldComponentUpdate 方法。）

              使用 connect() 前，需要先定义 mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中。例如，VisibleTodoList
              需要计算传到 TodoList 中的 todos，所以定义了根据 state.visibilityFilter 来过滤 state.todos 的方法，并在 mapStateToProps 中使用。
              现在来创建一些容器组件把这些展示组件和 Redux 关联起来。技术上讲，容器组件就是使用 store.subscribe() 从 Redux state 树中读取部分数据，并通过 props
              来把这些数据提供给要渲染的组件。你可以手工来开发容器组件，但建议使用 React Redux 库的 connect() 方法来生成，这个方法做了性能优化来避免很多不必要的重复渲染。（这样你就不必为了性能而手动实现
              React 性能优化建议 中的 shouldComponentUpdate 方法。）

              使用 connect() 前，需要先定义 mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中。例如，VisibleTodoList
              需要计算传到 TodoList 中的 todos，所以定义了根据 state.visibilityFilter 来过滤 state.todos 的方法，并在 mapStateToProps 中使用。
              现在来创建一些容器组件把这些展示组件和 Redux 关联起来。技术上讲，容器组件就是使用 store.subscribe() 从 Redux state 树中读取部分数据，并通过 props
              来把这些数据提供给要渲染的组件。你可以手工来开发容器组件，但建议使用 React Redux 库的 connect() 方法来生成，这个方法做了性能优化来避免很多不必要的重复渲染。（这样你就不必为了性能而手动实现
              React 性能优化建议 中的 shouldComponentUpdate 方法。）

              使用 connect() 前，需要先定义 mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中。例如，VisibleTodoList
              需要计算传到 TodoList 中的 todos，所以定义了根据 state.visibilityFilter 来过滤 state.todos 的方法，并在 mapStateToProps 中使用。
            </p>
          </Panel>

        </div>
      </div>
    )
  }
}