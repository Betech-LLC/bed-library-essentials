<template>
    <div class="container">
        <div class="flex space-x-10 xl:space-x-16">
            <div class="flex-1">
                <h1>Kết nối với .....</h1>
                <p>Chúng tôi sẵn sàng ghi nhận đóng góp và cung cấp dịch vụ tốt nhất đến khách hàng.</p>
                <JForm v-model="form" :rules="rules" class="grid grid-cols-2 gap-x-8 gap-y-6">
                    <div class="md:col-span-1 col-span-full">
                        <JFormField
                            :field="{
                                type: 'text',
                                name: 'firstName',
                                label: 'Tên *',
                                placeholder: 'Nhập tên của bạn',
                            }"
                        />
                    </div>

                    <div class="md:col-span-1 col-span-full">
                        <JFormField
                            :field="{
                                type: 'text',
                                name: 'lastName',
                                label: 'Họ *',
                                placeholder: 'Nhập họ của bạn',
                            }"
                        />
                    </div>

                    <div class="col-span-full">
                        <JFormField
                            :field="{
                                type: 'email',
                                name: 'email',
                                label: 'Email *',
                                placeholder: 'Nhập email',
                            }"
                        />
                    </div>
                    <div class="col-span-full">
                        <JFormField
                            :field="{
                                type: 'number',
                                name: 'phone',
                                label: 'Số điện thoại *',
                                placeholder: 'Nhập số điện thoại',
                            }"
                        />
                    </div>
                    <div class="col-span-full">
                        <JFormField
                            :field="{
                                type: 'textarea',
                                name: 'note',
                                rows: 5,
                                label: 'Lời nhắn',
                                placeholder: 'Nhập nội dung cần hỗ trợ',
                            }"
                        />
                    </div>

                    <div class="flex justify-center my-4 col-span-full">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </JForm>
            </div>
            <div class="flex-1"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: { firstName: null, lastName: null, email: null, phone: null, note: null },
            rules: {
                firstName: 'required',
                lastName: 'required',
                phone: 'phone|required',
                email: 'required|email',
                note: '',
            },
        }
    },
}
</script>
<style lang=""></style>
