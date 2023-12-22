import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElearningSchoolComponent } from './components/pages/elearning-school/elearning-school.component';
import { VendorCertificationEtrainingComponent } from './components/pages/vendor-certification-etraining/vendor-certification-etraining.component';
import { OnlineTrainingSchoolComponent } from './components/pages/online-training-school/online-training-school.component';
import { DistanceLearningComponent } from './components/pages/distance-learning/distance-learning.component';
import { LanguageSchoolComponent } from './components/pages/language-school/language-school.component';
import { ModernSchoolingComponent } from './components/pages/modern-schooling/modern-schooling.component';
import { YogaTrainingComponent } from './components/pages/yoga-training/yoga-training.component';
import { HealthCoachingComponent } from './components/pages/health-coaching/health-coaching.component';
import { KindergartenComponent } from './components/pages/kindergarten/kindergarten.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { AboutStyleOneComponent } from './components/pages/about-style-one/about-style-one.component';
import { AboutStyleTwoComponent } from './components/pages/about-style-two/about-style-two.component';
import { AboutStyleThreeComponent } from './components/pages/about-style-three/about-style-three.component';
import { AboutStyleFourComponent } from './components/pages/about-style-four/about-style-four.component';
import { TeacherComponent } from './components/pages/teacher/teacher.component';
import { ProfileAuthenticationComponent } from './components/pages/profile-authentication/profile-authentication.component';
import { LoginComponent } from './components/pages/profile-authentication/login/login.component';
import { RegisterComponent } from './components/pages/profile-authentication/register/register.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './components/pages/terms-of-service/terms-of-service.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { CoursesStyleOneComponent } from './components/pages/courses-style-one/courses-style-one.component';
import { CoursesStyleTwoComponent } from './components/pages/courses-style-two/courses-style-two.component';
import { CoursesStyleThreeComponent } from './components/pages/courses-style-three/courses-style-three.component';
import { CoursesStyleFourComponent } from './components/pages/courses-style-four/courses-style-four.component';
import { CoursesStyleFiveComponent } from './components/pages/courses-style-five/courses-style-five.component';
import { CoursesStyleSixComponent } from './components/pages/courses-style-six/courses-style-six.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { BecomeATeacherComponent } from './components/pages/become-a-teacher/become-a-teacher.component';
import { CategoriesComponent } from './components/pages/categories/categories.component';
import { EventsComponent } from './components/pages/events/events.component';
import { EventsDetailsComponent } from './components/pages/events-details/events-details.component';
import { ProductsListStyleOneComponent } from './components/pages/products-list-style-one/products-list-style-one.component';
import { ProductsListStyleTwoComponent } from './components/pages/products-list-style-two/products-list-style-two.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { BlogStyleOneComponent } from './components/pages/blog-style-one/blog-style-one.component';
import { BlogStyleTwoComponent } from './components/pages/blog-style-two/blog-style-two.component';
import { BlogStyleThreeComponent } from './components/pages/blog-style-three/blog-style-three.component';
import { BlogStyleFourComponent } from './components/pages/blog-style-four/blog-style-four.component';
import { BlogDetailsStyleOneComponent } from './components/pages/blog-details-style-one/blog-details-style-one.component';
import { GymCoachingComponent } from './components/pages/gym-coaching/gym-coaching.component';
import { LearningManagementComponent } from './components/pages/learning-management/learning-management.component';
import { BlogCategoriesSearchComponent } from './components/pages/blog-categories-search/blog-categories-search.component';
import { BlogTagSearchComponent } from './components/pages/blog-tag-search/blog-tag-search.component';
import { CoursesDetailsComponent } from './components/pages/courses-details/courses-details.component';
import { CourseCategorySearchComponent } from './components/pages/course-category-search/course-category-search.component';
import { ProfileUpdateComponent } from './components/pages/profile-update/profile-update.component';
import { CoursesCheckoutComponent } from './components/pages/courses-checkout/courses-checkout.component';
import { CoursesCartComponent } from './components/pages/courses-cart/courses-cart.component';
import { MyCourseComponent } from './components/pages/my-course/my-course.component';
import { IndexComponent } from './components/pages/index/index.component';
import { IndexContactComponent } from './components/pages/index/index-contact/index-contact.component';
import { IndexAboutComponent } from './components/pages/index/index-about/index-about/index-about.component';

const routes: Routes = [
    { path: '', component: ElearningSchoolComponent },
    {
        path: 'vendor-certification-etraining',
        component: VendorCertificationEtrainingComponent,
    },
    {
        path: 'online-training-school',
        component: OnlineTrainingSchoolComponent,
    },
    { path: 'distance-learning', component: DistanceLearningComponent },
    { path: 'language-school', component: LanguageSchoolComponent },
    { path: 'modern-schooling', component: ModernSchoolingComponent },
    { path: 'yoga-training', component: YogaTrainingComponent },
    { path: 'health-coaching', component: HealthCoachingComponent },
    { path: 'kindergarten', component: KindergartenComponent },
    { path: 'gym-coaching', component: GymCoachingComponent },
    { path: 'learning-management', component: LearningManagementComponent },
    { path: 'about-1', component: AboutStyleOneComponent },
    { path: 'about-2', component: AboutStyleTwoComponent },
    { path: 'about-3', component: AboutStyleThreeComponent },
    { path: 'about-4', component: AboutStyleFourComponent },
    { path: 'teacher', component: TeacherComponent },
    {
        path: 'profile-authentication',
        component: ProfileAuthenticationComponent,
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'terms-of-service', component: TermsOfServiceComponent },
    { path: 'courses-1', component: CoursesStyleOneComponent },
    { path: 'courses-2', component: CoursesStyleTwoComponent },
    { path: 'courses-3', component: CoursesStyleThreeComponent },
    { path: 'courses-4', component: CoursesStyleFourComponent },
    { path: 'courses-5', component: CoursesStyleFiveComponent },
    { path: 'courses-6', component: CoursesStyleSixComponent },
    { path: 'course/:slug', component: CoursesDetailsComponent },
    { path: 'courses-cart', component: CoursesCartComponent },
    { path: 'courses-checkout', component: CoursesCheckoutComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'update-profile', component: ProfileUpdateComponent },
    { path: 'profile/my-course/:slug', component: MyCourseComponent },
    { path: 'become-a-teacher', component: BecomeATeacherComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'course-category/:slug', component: CourseCategorySearchComponent },
    { path: 'events', component: EventsComponent },
    { path: 'single-events', component: EventsDetailsComponent },
    { path: 'products-list-1', component: ProductsListStyleOneComponent },
    { path: 'products-list-2', component: ProductsListStyleTwoComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'product/:slug', component: ProductsDetailsComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'blog-1', component: BlogStyleOneComponent },
    { path: 'blog-2', component: BlogStyleTwoComponent },
    { path: 'blog-3', component: BlogStyleThreeComponent },
    { path: 'blog-4', component: BlogStyleFourComponent },
    { path: 'blog/:slug', component: BlogDetailsStyleOneComponent },
    { path: 'category/:slug', component: BlogCategoriesSearchComponent },
    { path: 'tag/:slug', component: BlogTagSearchComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: 'index', component: IndexComponent },
    { path: 'index_contact', component: IndexContactComponent },
    { path: 'about', component: IndexAboutComponent },
    // Here add new pages component

    { path: '**', component: ErrorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule],
})
export class AppRoutingModule { }
