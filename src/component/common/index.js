import { Button, Form, message, Input, Divider, Flex, Upload } from "antd";
import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';


export const FormItem = (props) => {
    return (
        <Form.Item {...props}>
            {props.children}
        </Form.Item>
    );
};

export const AntdInput = (props) => {
    const tempRule = [
        {
            required: props.required,
            message: `Please enter ${props.label}`,
        },
    ];

    const localrules =
        props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule;

    return (
        <FormItem {...props} rules={localrules}>
            <Input onclick={props.onclick} onchange={props.onchange} type={props.type} />
        </FormItem>
    );
};

export const AntdUpload = (props) => {
    const tempRule = [
        {
            required: props.required,
            message: `Please enter ${props.label}`,
        },
    ];

    const localrules =
        props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule;

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    };

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );

    return (
        <FormItem {...props} rules={localrules}>
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://fakestoreapi.com/products"
                beforeUpload={beforeUpload}
                onChange={handleChange}
            >
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt="avatar"
                        style={{
                            width: '100%',
                        }}
                    />
                ) : (
                    uploadButton
                )}
            </Upload>
            <Upload
                name="avatar"
                listType="picture-circle"
                className="avatar-uploader"
                showUploadList={false}
                action="https://fakestoreapi.com/products"
                beforeUpload={beforeUpload}
                onChange={handleChange}
            >
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt="avatar"
                        style={{
                            width: '100%',
                        }}
                    />
                ) : (
                    uploadButton
                )}
            </Upload>

        </FormItem>

    )

}

export const SaveButton = (props) => {
    return (
        <Button className="bg-green-400 text-white" {...props}>
            {props.name}
        </Button>
    );
};

export const EditButton = (props) => {
    return (
        <Button className="bg-yellow-400" {...props}>Edit</Button>
    )
}

export const AntdUploader = (props) => {
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
        if (!isJpgOrPng) {
            message.error("You can only upload JPG/PNG file!");
        }
    };
    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => callback(reader.result));
        reader.readAsDataURL(img);
    };

    const [imageUrl, setImageUrl] = React.useState();
    const handleChange = (info) => {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (url) => {
            setImageUrl(url);
        });
    };

    const uploadButton = (
        <button type="button">
            <div className=" my-7 size-4">Upload</div>
        </button>
    );
    const tempRule = [
        {
            required: props.required,
            message: `Please Enter ${props.label}`,
        },
    ];

    const localrules =
        props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule;
    return (
        <Form.Item {...props} rules={localrules}>
            <Upload name="avatar" listType="picture-circle"
                className="avatar-uploader" showUploadList={false}
                beforeUpload={beforeUpload}
                onChange={handleChange}>
                {imageUrl ? (
                    <img src={imageUrl} alt="avatar" className=" rounded-full 
              size-12 object-cover "/>) :
                    (uploadButton)}
            </Upload>
        </Form.Item>
    );
};

