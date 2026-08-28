import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {

  // slides = [
  //   {
  //     src: 'assets/images/s1.svg',
  //     thumbnail: 'assets/images/s1.svg',
  //     alt: 'The Woods',
  //     location: 'الأرجنتين والبرازيل',
  //     title: 'شلالات إجوازو (Iguazu Falls) - الأرجنتين والبرازيل',
  //     description: 'مجموعة مذهلة من الشلالات تمتد على الحدود بين الأرجنتين والبرازيل، محاطة بالغابات الاستوائية الكثيفة. تُعد واحدة من أعظم عجائب الطبيعة، حيث تتدفق المياه بقوة وسط ضباب ساحر.'
  //   },
  //   {
  //     src: 'assets/images/s2.svg',
  //     thumbnail: 'assets/images/s2.svg',
  //     alt: 'Cinque Terre',
  //     location: 'إيطاليا',
  //     title: 'قرى سينك تير (Cinque Terre) - إيطاليا',
  //     description: 'خمس قرى ملونة تقع على ساحل البحر المتوسط، تمتاز بمناظرها الطبيعية الخلابة وممراتها الجبلية الرائعة.'
  //   },
  //   {
  //     src: 'assets/images/s3.svg',
  //     thumbnail: 'assets/images/s3.svg',
  //     alt: 'Mountains and fjords',
  //     location: 'النرويج',
  //     title: 'جبال ومضايق النرويج',
  //     description: 'مناظر ساحرة من الجبال الشاهقة والمضايق العميقة التي تأسر الأنظار وتُعد ملاذاً لعشاق الطبيعة.'
  //   },
  //   {
  //     src: 'assets/images/s4.svg',
  //     thumbnail: 'assets/images/s4.svg',
  //     alt: 'Northern Lights',
  //     location: 'أيسلندا',
  //     title: 'الأضواء الشمالية (Aurora Borealis) - أيسلندا',
  //     description: 'عرض ضوئي طبيعي مذهل يضيء السماء بألوان ساحرة، ويُعتبر من أجمل الظواهر الطبيعية.'
  //   },
  //   {
  //     src: 'assets/images/s5.svg',
  //     thumbnail: 'assets/images/s5.svg',
  //     alt: 'Nature and sunrise',
  //     location: 'كينيا',
  //     title: 'شروق الشمس في سفانا كينيا',
  //     description: 'مناظر خلابة لحياة البرية مع شروق الشمس في الأراضي العشبية الواسعة.'
  //   },
  //   {
  //     src: 'assets/images/s1.svg',
  //     thumbnail: 'assets/images/s1.svg',
  //     alt: 'Snowy Mountains',
  //     location: 'سويسرا',
  //     title: 'الجبال المغطاة بالثلوج - سويسرا',
  //     description: 'مناظر رائعة لجبال الألب المغطاة بالثلوج والتي تجذب الزوار من جميع أنحاء العالم.'
  //   }
  // ];

  // currentSlide = 0;
  // intervalId: any;
  // currentSlideIndex: number = 0;

  // ngOnInit(): void {
  //   this.startAutoSlide();
  // }

  // ngOnDestroy(): void {
  //   this.stopAutoSlide();
  // }

  // startAutoSlide(): void {
  //   this.intervalId = setInterval(() => {
  //     this.nextSlide();
  //   }, 1500000); 
  // }

  // stopAutoSlide(): void {
  //   if (this.intervalId) {
  //     clearInterval(this.intervalId);
  //   }
  // }

  // nextSlide(): void {
  //   this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  // }
  
  // prevSlide():void { 
  //   this.currentSlide = (this.currentSlide - 1) % this.slides.length;
  // }

  // goToSlide(index: number): void {
  //   this.currentSlide = index;
  //   this.stopAutoSlide();
  //   this.startAutoSlide();
  // }

  // getTransform(): string {
  //   return `translateX(-${this.currentSlide * 100}%)`;
  // }



  slides = [
    {
      src: 'assets/images/s1.svg',
      thumbnail: 'assets/images/s1.svg',
      alt: 'شلالات إجوازو (Iguazu Falls)',
      location: 'الأرجنتين والبرازيل',
      title: 'شلالات إجوازو (Iguazu Falls) - الأرجنتين والبرازيل',
      description: 'مجموعة مذهلة من الشلالات تمتد على الحدود بين الأرجنتين والبرازيل، محاطة بالغابات الاستوائية الكثيفة. تُعد واحدة من أعظم عجائب الطبيعة، حيث تتدفق المياه بقوة وسط ضباب ساحر.'
    },
    {
      src: 'assets/images/s2.svg',
      thumbnail: 'assets/images/s2.svg',
      alt: 'جبل ماترهورن',
      location: 'سويسرا وإيطاليا',
      title: 'جبل ماترهورن (Matterhorn) - سويسرا وإيطاليا',
      description: 'أحد أشهر القمم الجبلية في العالم، يتميز بشكله الهرمي المهيب وقممه المغطاة بالثلوج. تحيط به المراعي الخضراء والبحيرات النقية، مما يجعله وجهة خيالية لعشاق الجبال.'
    },
    {
      src: 'assets/images/s3.svg',
      thumbnail: 'assets/images/s3.svg',
      alt: 'وادي القمر',
      location: 'الأردن',
      title: '"وادي القمر" او وادي رم (Wadi Rum) - الأردن',
      description: 'صحراء ساحرة تعرف باسم "وادي القمر"، تحتوي على تشكيلات صخرية فريدة وكثبان رملية حمراء. يعتبر المكان مثاليًا لاستكشاف الطبيعة والتأمل تحت سماء مليئة بالنجوم.'
    },
    {
      src: 'assets/images/s4.svg',
      thumbnail: 'assets/images/s4.svg',
      alt: 'جزيرة سكاي',
      location: 'اسكتلندا',
      title: 'جزيرة سكاي (Isle of Skye) - اسكتلندا',
      description: 'جزيرة خلابة تشتهر بالمناظر الطبيعية الدرامية، من الجبال والوديان إلى البحيرات والشواطئ. توفر تجربة استثنائية لمحبي المغامرات والمشي في الطبيعة.'
    },
    {
      src: 'assets/images/s5.svg',
      thumbnail: 'assets/images/s5.svg',
      alt: 'غابة الأمازون المطيرة',
      location: 'أمريكا الجنوبية',
      title: 'غابة الأمازون المطيرة (Amazon Rainforest) - أمريكا الجنوبية',
      description: 'أكبر غابة استوائية في العالم، موطن لأنواع لا حصر لها من النباتات والحيوانات. تتميز بتنوعها الحيوي الهائل، وشلالاتها الخفية، وأنهارها العظيمة مثل نهر الأمازون.'
    }
  ];

currentSlideIndex = 0;

changeSlide(direction: number): void {
  this.currentSlideIndex = (this.currentSlideIndex + direction + this.slides.length) % this.slides.length;
}

goToSlide(index: number): void {
  this.currentSlideIndex = index;
}


}
