import React from "react";
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import {Link} from "react-router-dom";
import Menu from "../components/Menu.jsx";


const Single = () => {
    return (
        <div className="single">
            <div className="content">
                <img
                    src="https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""/>
                <div className="user">
                    <img
                        src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""/>
                    <div className="info">
                        <span>Aslan</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                            <img src={Edit}/>
                        </Link>
                        <img src={Delete}/>
                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet nibh eleifend,
                    vestibulum velit non, varius est.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet nibh eleifend,
                    vestibulum velit non, varius est. Vestibulum sit amet auctor ipsum. Pellentesque eu nibh quis orci
                    laoreet viverra nec et lectus. Curabitur luctus eros sed purus semper, quis pellentesque orci
                    euismod. Quisque feugiat commodo dolor vitae lobortis. In quam quam, luctus in tristique non,
                    porttitor a nisi. Proin condimentum justo eu erat aliquet cursus et ac magna. Etiam consequat ipsum
                    sit amet ligula blandit feugiat. Nunc vitae odio id augue convallis molestie.

                    Aliquam sed neque et felis tempus sollicitudin. Etiam ultrices justo ac eros varius, at aliquam elit
                    mattis. Proin cursus, erat vel congue dignissim, massa justo pharetra lorem, eu interdum orci ex
                    ornare quam. Praesent egestas purus sit amet placerat interdum. Donec scelerisque enim orci, commodo
                    dictum ante dignissim ut. Vestibulum fringilla, leo et molestie eleifend, metus odio dapibus ipsum,
                    sit amet tincidunt dolor turpis non neque. Praesent tincidunt pharetra finibus. Suspendisse placerat
                    pulvinar turpis eget varius. Nam mollis dictum pulvinar. Cras eu tellus rutrum, maximus quam in,
                    posuere velit. Suspendisse potenti. Suspendisse pulvinar metus mi, et pharetra tellus pellentesque
                    feugiat. Nulla tristique dapibus auctor. Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Fusce lobortis pretium eros, vitae bibendum magna efficitur et.
                    Quisque ut facilisis augue, sit amet laoreet sapien.

                    Pellentesque vestibulum tincidunt massa vel consequat. Quisque viverra turpis eu nulla blandit, in
                    vehicula sapien malesuada. Cras hendrerit aliquet tortor non placerat. Sed quis libero non nisi
                    dapibus imperdiet vitae eget felis. Vivamus mollis pharetra accumsan. Vestibulum pulvinar cursus
                    purus, congue blandit tellus facilisis id. Vivamus ipsum diam, hendrerit at nunc in, mollis egestas
                    mi. Nam efficitur egestas neque, nec auctor nulla vulputate eu. Vivamus porta, orci ac faucibus
                    convallis, nisl neque finibus eros, a finibus enim ex accumsan velit. Duis at eleifend risus.
                </p>
            </div>
            <Menu/>
        </div>
    )
}

export default Single;