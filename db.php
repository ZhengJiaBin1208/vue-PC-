 $model=D("User");
    $info=$_POST;
    $condition['username'] = $_POST['username'];
    $query['username'] = $_POST['username'];
    $query['password'] = $_POST['password'];

    $uid = $model->where($condition)->select()[0]['id'];

    $result = $model->where($condition)->count();
    if($result == 0){
        $data=array(
            code => '102',
            msg => '未找到该用户'
        );
        $this->ajaxReturn($data);
    }else{
        $result1 = $model->where($query)->count();

        if($result1>0){
            $data=array(
                code=>'0',
                msg=>'登录成功',
                uid=>$uid
            );
        }else{
            $data=array(
                code=>'102',
                msg=>'密码错误'
            );
        }
        $this->ajaxReturn($data);
    }
