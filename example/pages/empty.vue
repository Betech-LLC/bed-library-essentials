<template>
    <JEmpty name="empty-cart" description="Chưa có sản phẩm trong giỏ hàng.">
        <template #button>
            <button class="btn btn-primary">Mua sắm ngay</button>
        </template>
    </JEmpty>
    <JEmpty name="empty-cart" description="Chưa có sản phẩm trong giỏ hàng.">
        <template #image>
            <img src="https://via.placeholder.com/200x200" />
        </template>
        <template #button>
            <button class="btn btn-primary">Mua sắm ngay</button>
        </template>
    </JEmpty>
    <JEmpty name="empty-vlog" description="Chúng tôi đang cập nhật video, quý khách vui lòng quay lại sau." />
    <JEmpty name="empty-project" description="Chúng tôi đang cập nhật dự án, quý khách vui lòng quay lại sau." />
    <JEmpty
        name="empty-project-error"
        description="Error Chúng tôi đang cập nhật dự án, quý khách vui lòng quay lại sau."
    />
</template>
