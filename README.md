# talk in data
nba 赛季 统计投篮数据 设计一个shot表，设计哪些字段
##  数据化

player_name
player_id
shot_made(投中)
shot_type(2rd|3rd)
team_id
game_id


team_id team_name season_1(03-04) 

event-type ：Feed Throw 罚球 | rebound 篮板 | ...
action-type ： Layup 上篮 | Dunk 扣篮  | jump shoot 跳投| Hook shoot 勾手  | Fadeaway 后仰投篮 | ...

shotDate
distance


## 赛季投篮

一切皆可数据化，细致的去数学表达主题(shot)
赛季，球队，队员，得分(分数，动作，原因，结果)，zone(区域，距离，坐标),position(位置，投篮位置)，left(分，秒)重要性


## AI 如何帮助我们设计数据表？
-  数据助理
- 吴恩达的 `promt`  engineering 善于向AI提问
 - 给你一个角色 role
 - 指定明确的任务
 - 约束必须做什么，不能做什么
 - 迭代优化：初次设计的提示可能不会立即达到最佳效果，因此需要不断测试和调整提示，直到获得满意的结果。
- prompt过程就是coding过程
 prompt 提示词(提问
 
 - 假设你是一位数据库工程师，   给他一个角色
  请你帮我设计一张nba 赛季投篮数据表 shots  指定任务
  数据表需要满足mysql的约束
  请包含赛季、球队、球员、得分（得分与否、投篮动作、得分原因）、投篮位置、球员位置（如SG）、
  比赛时间，距离结束时间（分、秒）
  其他字段不需要给出
  请返回sql , 并给出原因
 
 
 
 )