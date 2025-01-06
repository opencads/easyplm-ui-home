import { forwardRef, useEffect } from "react";
import { Flex } from "../../natived";
import { services } from "../../services";
import { dragClass } from "../Home";
import { Button } from "antd";
import { CloseOutlined, MinusOutlined } from "@ant-design/icons";

export interface ISaveToWorkspaceProps {

}

export interface ISaveToWorkspaceRef {

}

export const SaveToWorkspace = forwardRef<ISaveToWorkspaceRef, ISaveToWorkspaceProps>((props, ref) => {
    useEffect(() => {
        let func = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            // 打印所有参数
            for (const [key, value] of urlParams.entries()) {
                console.log(`${key}: ${value}`);
            }
            if (urlParams.has("dataID")) {
                let dataID = urlParams.get("dataID");
                if (dataID) {
                    console.log(await services.getDataByID(dataID));
                }
            }
        };
        func();
    }, []);
    return <Flex direction='column' style={{
        width: '100vw',
        height: '100vh',
    }}>
        <Flex>
            <Flex horizontalCenter className={dragClass} onMouseDown={e => {
                services.mouseDownDrag();
                e.preventDefault();
                e.stopPropagation();
            }} style={{
                flex: 1,
                userSelect: 'none'
            }}>
                {"Save To Workspace"}
            </Flex>
            <Button type='text'
                icon={<MinusOutlined />} onClick={() => {
                    services.minimize();
                }}>
            </Button>
            <Flex direction='column'>
                
            </Flex>
        </Flex>
    </Flex>
});
